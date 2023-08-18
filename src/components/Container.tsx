function Container(props: ContainerProps) {
  return <div className="Container">{props.children}</div>;
}

export default Container;

type ContainerProps = {
  children: React.ReactNode;
};
