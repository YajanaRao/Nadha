import {createModel} from '@xstate/test';
import {playerMachine} from "../src";


const playerModel = createModel(playerMachine);

describe('toggle', () => {
    const testPlans = playerModel.getShortestPathPlans();

    testPlans.forEach(plan => {
        describe(plan.description, () => {
            plan.paths.forEach(path => {
                it(path.description, async () => {
                    // do any setup, then...
                    console.log("don't know what to do");

                    // await path.test(page);
                });
            });
        });
    });

    it('should have full coverage', () => {
        return playerModel.testCoverage();
    });
});


