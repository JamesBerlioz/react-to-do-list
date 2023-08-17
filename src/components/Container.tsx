type ContainerProps = {
  children: React.ReactNode;
};

function Container(props: ContainerProps) {
  return <div className="Container">{props.children}</div>;
}

export default Container;
