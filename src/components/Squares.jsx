/* eslint-disable react/prop-types */
export function Squares(props) {

    return <div className='boxClass'  {...props}>
        {props.x ? 'X' : (props.o ? 'O' : '') }
    </div>
}