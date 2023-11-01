interface Props {
  source: string;
  goto: string;
  label: string;
}

const style = {
  filter: "invert(100%)",
};

const SocialIcon = ({ source, goto, label }: Props) => {
  return (
    <a href={goto} target="_blank" className="link-underline-dark link-light">
      <img src={source} style={style} className="img-fluid"></img> - {label}
    </a>
  );
};

export default SocialIcon;
