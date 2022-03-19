import React, {useEffect} from 'react';
import {Bracket, RenderSeedProps, RoundProps, Seed, SeedItem, SeedTeam, SingleLineSeed} from "react-brackets";

const TournamentBracket = ({games}) => {

    const roundsNames = ['Round of 16', 'Quarter final', 'Semi-Final', 'Final']

    const rounds: RoundProps[] = [
        {
            title: 'Round of 16',
            seeds: []
        },
        {
            title: 'Quarter final',
            seeds: []
        },
        {
            title: 'Semi-Final',
            seeds: []
        },
        {
            title: 'Final',
            seeds: []
        },
    ]

    useEffect(() => {
        let count = 0
        rounds.map(round => {
            return {
                ...round,
                seeds: games.filter(game => game.stage === game.title).map(game => {
                    return {
                        id:count++,
                        teams:[{name: game.homeTeam.team.name}, {name: game.guestTeam.team.name}],
                        winner: game.finished ? game.homeTeamResult > game.guestTeamResult ? 0 : 1 : null}
                })
            }
        })
    }, [games])


    const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}: RenderSeedProps) => {

        const isLineConnector = rounds[roundIndex].seeds.length === rounds[roundIndex + 1]?.seeds.length;

        const Wrapper = isLineConnector ? SingleLineSeed : Seed;

        // mobileBreakpoint is required to be passed down to a seed
        return (
            <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 18 }}>
                <SeedItem>
                    <div className="bg-white text-gray-900">
                        {
                            seed.teams.map((team, index) =>
                                <SeedTeam
                                    className={`${ seed.winner !== null && seed.winner === index && 'bg-mustard text-white'}`}>
                                    {team.name || 'Нет команды'}
                                </SeedTeam>
                            )
                        }
                    </div>
                </SeedItem>
            </Wrapper>
        );
    };

    return (
        <Bracket rounds={rounds} renderSeedComponent={CustomSeed}  bracketClassName="justify-center"/>
    );
};

export default TournamentBracket;
