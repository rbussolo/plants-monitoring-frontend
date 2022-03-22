

export function timestampToDateFormatted(timestamp: string): string{
  const date = new Date(timestamp);

  return date.toLocaleDateString("pt-br", { hour: '2-digit', minute: '2-digit' });
}