interface Props {
  source: string;
  goto: string;
}

const style = {
  filter: "invert(100%)",
};

const SocialIcon = ({ source, goto }: Props) => {
  return (
    <a href="goto">
      <img src={source} style={style}></img>
    </a>
  );
};

export default SocialIcon;
