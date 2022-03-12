import React from 'react';
import {Bracket, RenderSeedProps, RoundProps, Seed, SeedItem, SeedTeam, SingleLineSeed} from "react-brackets";

const TournamentBracket = () => {
    const rounds: RoundProps[] = [
        {
            title: 'Round one',
            seeds: [
                {
                    id: 1,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                },
                {
                    id: 2,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
            ],
        },
        {
            title: 'Round one',
            seeds: [
                {
                    id: 4,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team C' }],
                },
                {
                    id: 5,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team E' }, { name: 'Team M' }],
                }
            ],
        },
        {
            title: 'Round three',
            seeds: [
                {
                    id: 6,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team M' }, { name: 'Team C' }],
                },
            ],
        },
    ];

    const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}: RenderSeedProps) => {
        // ------ assuming rounds is the losers brackets rounds ------
        // losers rounds usually got some identical seeds amount like (2 - 2 - 1 - 1)

        const isLineConnector = rounds[roundIndex].seeds.length === rounds[roundIndex + 1]?.seeds.length;

        const Wrapper = isLineConnector ? SingleLineSeed : Seed;

        // mobileBreakpoint is required to be passed down to a seed
        return (
            <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 18 }}>
                <SeedItem>
                    <div className="bg-white text-gray-900">
                        <SeedTeam className="bg-mustard text-white">{seed.teams[0]?.name || 'NO TEAM '}</SeedTeam>
                        <SeedTeam>{seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
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
