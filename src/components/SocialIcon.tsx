interface Props {
  source: string;
  goto: string;
}

const style = {
  filter: "invert(100%)",
};

const SocialIcon = ({ source, goto }: Props) => {
  return (
    <a href={goto} target="_blank">
      <img src={source} style={style} className="img-fluid"></img>
    </a>
  );
};

export default SocialIcon;
