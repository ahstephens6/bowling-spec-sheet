import { NavigationInterface } from "../interfaces/interfaces"

export const NAVLINKS: NavigationInterface[] = [
    {
        name: `Bowlers`,
        route: '',
    },
    {
        name: 'Add Bowler',
        route: `addBowler/:id`,
    },
    {
        name: `Remove Bowler`,
        route: `removeBowler/:id`,
    },
];