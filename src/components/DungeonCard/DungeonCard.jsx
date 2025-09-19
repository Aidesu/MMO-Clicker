export default function DungeonCard(props) {
    return (
        <div className="dungeonCards">
            <img src="public/assets/pic/dungeonDefaultPic.png" alt="" />
            <ul>
                <li>Name : {props.dungeonName}</li>
                <li>Level : {props.dungeonLevel}</li>
                <li>Boss : {props.dungeonBoss}</li>
            </ul>
        </div>
    );
}
