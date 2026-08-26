export function SystemStatus({ value }: { value: string }) {
  return <div className="status"><span>Status</span> <b>{value}</b></div>;
}
