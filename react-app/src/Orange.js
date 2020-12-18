import orange1 from './orange1.png';
import strawberry1 from './strawberry1.png';
import orange2 from './orange2.png';
import './Orange.scss'

function Orange({
    canClick,
    onClick
}) {
    return (<div className="Orange" onClick={onClick}>
        <img alt="orange" src={strawberry1} style={{display: canClick ? 'block' : 'none'}}/>
        <img alt="orange2" src={strawberry1} style={{display: !canClick ? 'block' : 'none'}}/>
    </div>)
}

export default Orange;