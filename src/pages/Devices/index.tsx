import { useEffect, useState } from "react";
import { AlertModal } from "../../components/AlertModal";
import { Header } from "../../components/Header";
import { getListDevice } from "../../services/api";
import { timestampToDateFormatted } from "../../utils/date";
import { Container } from "./styles";

interface Device {
  id: number;
  device: string;
  timestamp: string;
  temperature: string;
  humidity: string;
  soilMoisture: string;
}

interface DevicesProps {
  logout: () => void;
}

export function Devices({ logout }: DevicesProps){
  const [devices, setDevices] = useState<Device[]>([]);

  const [modalType, setModalType] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const d = await getListDevice();

      if(!d.success){
        if(d.error_code === 403) {
          logout();
        } else {
          setModalType("error");
          setModalTitle("Error");
          setModalIsOpen(true);
          setModalMessage(d.error_message!);
        }
      }else{
        setDevices(d.devices!);
      }
    }

    fetchData();
  },[]);

  function handleOnCloseModal(): void {
    setModalIsOpen(false);
  }

  return (
    <>
      <AlertModal
        type={modalType}
        isOpen={modalIsOpen}
        message={modalMessage}
        title={modalTitle}
        onClose={handleOnCloseModal}
      />
      <Header logout={logout} />
      <Container>
        <div>
          <p>
            Devices - Weather Info
          </p>
          <table>
            <thead>
              <tr>
                <td>Device</td>
                <td>Timestamp</td>
                <td>Temperature</td>
                <td>Humidity</td>
                <td>Soil Moisture</td>
              </tr>
            </thead>
            <tbody>
              {
                devices && devices.map(device => {
                  return (
                    <tr key={device.id}>
                      <td>{device.device}</td>
                      <td>{timestampToDateFormatted(device.timestamp)}</td>
                      <td>{device.temperature}</td>
                      <td>{device.humidity}</td>
                      <td>{device.soilMoisture}</td>
                    </tr>
                  )}
                )
              }
            </tbody>
          </table>
        </div>
      </Container>
    </>
  )
}