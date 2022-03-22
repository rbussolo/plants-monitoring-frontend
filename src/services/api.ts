import internal from "stream";

const url_base = "http://localhost:9090"

interface SignProps {
  email: string;
  password: string;
}

interface SignReturn {
  success: boolean;
  error_message?: string;
}

interface ResponseError {
  error: string;
}

interface ResponseSignIn {
  token: string;
}

export async function signIn(data: SignProps): Promise<SignReturn> {
  const response = await fetch(url_base + "/api/signin", {
    method: "POST",
    body: JSON.stringify(data)
  });

  if (response.status < 200 || response.status >= 300) {
    const error: ResponseError = await response.json();

    return {
      success: false,
      error_message: error.error
    };
  }

  const t: ResponseSignIn = await response.json();

  localStorage.setItem('userToken', t.token);

  return {
    success: true
  }
}

export async function signUp(data: SignProps): Promise<SignReturn> {
  const response = await fetch(url_base + "/api/signup", {
    method: "POST",
    body: JSON.stringify(data)
  });

  if (response.status < 200 || response.status >= 300) {
    const error: ResponseError = await response.json();

    return {
      success: false,
      error_message: error.error
    };
  }

  return {
    success: true
  }
}

interface Device {
  id: number;
  device: string;
  timestamp: string;
  temperature: string;
  humidity: string;
  soilMoisture: string;
}

interface ListDeviceReturn {
  success: boolean;
  error_code?: number;
  error_message?: string;
  devices?: Device[];
}

export async function getListDevice(): Promise<ListDeviceReturn> {
  const userToken = localStorage.getItem('userToken');

  const response = await fetch(url_base + "/api/device/info/list", { method: "GET", headers: new Headers({ "Authorization" : userToken! }) });

  if(response.status < 200 || response.status >= 300) {
    const error: ResponseError = await response.json();

    return {
      success: false,
      error_code: response.status,
      error_message: error.error
    };
  }

  const devices: Device[] = await response.json();

  return {
    success: true,
    devices: devices
  }
}