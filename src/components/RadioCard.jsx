import Radio from "@material-ui/core/Radio";

function RadioCard({ value, image, desc, onSelect, checked }) {
  return (
    <div className="radio-card">
      <label>
        <div className="info">
          <p>
            <img src={image} alt={value} />
            <span>{value}</span>
          </p>
          {desc && <span>{desc}</span>}
        </div>
        <Radio
          checked={checked}
          onChange={() => onSelect(value, desc)}
          value={value}
        />
      </label>
    </div>
  );
}

export default RadioCard;
