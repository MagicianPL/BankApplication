import "./Flex.css";

export const Flex = (props) => (
  <div
    className={props.className}
  >
    {props.children}
  </div>
);

export default Flex;
