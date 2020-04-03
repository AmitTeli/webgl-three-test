import {addACube} from './services/threeService';

it('Adds a cube', done => {
    var childrenCountBeforeLoad = scene.children.length;

    addACube();
    setTimeout(() => {
        expect(scene.children.length).toBe(childrenCountBeforeLoad+1);
        done();
    }, 200)

});