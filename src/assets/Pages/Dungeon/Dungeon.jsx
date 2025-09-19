import DungeonCard from "../../../components/DungeonCard/DungeonCard";

export default function Dungeon() {
    return (
        <main>
            <section>
                <DungeonCard
                    dungeonName="L'entre de Gaius"
                    dungeonLevel="50-69"
                    dungeonBoss="Gaius Von Valbazard"
                />
                <DungeonCard
                    dungeonName="La Crypte de l'Ombre"
                    dungeonLevel="??-??"
                    dungeonBoss="????? ?? ??????"
                />

                <DungeonCard
                    dungeonName="Le Temple de Zoltar"
                    dungeonLevel="??-??"
                    dungeonBoss="???? ?????? ??????"
                />

                <DungeonCard
                    dungeonName="Les Cavernes de Glace"
                    dungeonLevel="40-59"
                    dungeonBoss="Frostfang"
                />

                <DungeonCard
                    dungeonName="La Forteresse de Fer"
                    dungeonLevel="80-99"
                    dungeonBoss="General Ironclad"
                />

                <DungeonCard
                    dungeonName="Le Labyrinthe Perdu"
                    dungeonLevel="20-39"
                    dungeonBoss="Minotaure Ancestral"
                />

                <DungeonCard
                    dungeonName="Les Ruines d'Eternia"
                    dungeonLevel="60-79"
                    dungeonBoss="Spectre d'Eternia"
                />
            </section>
        </main>
    );
}
