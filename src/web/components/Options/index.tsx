type Props = {
  options: string[];
};

const Options: React.SFC<Props> = ({ options }) => (
  <div>
    {options.map((option) => (
      <button key={option} type="button">{option}</button>
    ))}
  </div>
);

export default Options;
