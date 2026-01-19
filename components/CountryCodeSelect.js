export default function CountryCodeSelect({ value, onChange }) {
  return (
    <select className="p-2 border rounded-l" value={value} onChange={e => onChange(e.target.value)}>
      <option value="+60">Malaysia +60</option>
      <option value="+86">China +86</option>
      <option value="+1">USA +1</option>
      <option value="+44">UK +44</option>
    </select>
  )
}
