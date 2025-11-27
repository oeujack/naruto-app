export default function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <span style={{ fontWeight: 'bold', color: '#a0a0ff', minWidth: '80px' }}>
        {label}:
      </span>
      <span style={{ color: '#fff' }}>{value}</span>
    </div>
  );
}
