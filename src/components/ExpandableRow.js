import './ExpandableRows.css';


function ExpandableRow(props) {
    return (
        <div className='ExpandableRow'>
            <p><strong>Name: </strong> {props.data.name}</p>
            <p><strong>Symbol: </strong> {props.data.symbol}</p>
            <p><strong>Description: </strong> {props.data.description}</p>
            <p><strong>Upvote Count: </strong> {props.data.upvoteCount}</p>
            <p><strong>Website: </strong> <a href={props.data.website} rel="noreferrer" target="_blank">{props.data.website}</a></p>
        </div>
    );
}
export default ExpandableRow;
