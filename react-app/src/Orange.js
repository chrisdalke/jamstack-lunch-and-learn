import orange1 from './orange1.png';
import orange2 from './orange2.png';
import './Orange.scss'

function Orange({
    canClick,
    onClick
}) {
    return (<div className="Orange" onClick={onClick}>
        <img src={orange1} style={{display: canClick ? 'block' : 'none'}}/>
        <img src={orange2} style={{display: !canClick ? 'block' : 'none'}}/>
    </div>)
}

export default Orange;