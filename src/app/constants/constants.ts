import { NavigationInterface } from "../interfaces/interfaces"

export const NAVLINKS: NavigationInterface[] = [
    {
        name: `Home`,
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
    {
        name: `Spec Sheet`,
        route: `spec-sheet/:id`
    }
];