import React from "react"


export default function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

    const style = {
        collapsed: {
            display: 'none'
        },
        expanded: {
            display: 'block'
        },
        buttonStyle: {
            display: 'block'
        }
    };

    return (
        <div>
            <button style={style.buttonStyle} onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? 'Remember Password' : ' Change Password'}
            </button>
            <div
                className="collapse-content"
                style={isCollapsed ? style.expanded : style.collapsed}
                aria-expanded={isCollapsed}
            >
                {props.children}
            </div>
        </div>
    );
}

//   EXAMPLES
//   ReactDOM.render(
//     <Collapse>
//       <h1>This is a collapse</h1>
//       <p>Hello world!</p>
//     </Collapse>,
//     document.getElementById('root')
//   );