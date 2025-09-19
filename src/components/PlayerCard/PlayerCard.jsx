export default function PlayerCard(props) {
    return (
        <div id="playerCard">
            <ul>
                <li>
                    <img src={props.image} alt="Player picture" />
                </li>
                <li>{props.userTitle}</li>
                <li>{props.user}</li>
                <li>{props.class}</li>
                <li>Lvl : {props.level}</li>
                <li>Xp : {props.experience}</li>
                <li>PV : {props.life}</li>
                <li>Mana : {props.mana}</li>
                <li>Deny : ${props.deny}</li>
            </ul>
        </div>
    );
}
