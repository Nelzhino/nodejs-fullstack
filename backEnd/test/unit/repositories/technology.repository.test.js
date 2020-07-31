const { Technology } = require('../../../models');
const mockingoose = require('mockingoose').default;
let { TechnologyModelMock: { technology, technologies } } = require('../../mocks');


describe('Technology', () => {

    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it('Should find a technology by id', async() => {
        mockingoose(Technology).toReturn(technology, "findOne");
        const expected = await Technology.findById(technology._id);
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(JSON.parse(JSON.stringify(technology)));
    })


    it('Should find a list technologies', async() => {
        mockingoose(Technology).toReturn(technologies, "find");
        const expected = await Technology.find();
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(JSON.parse(JSON.stringify(technologies)));
    });


    it('Should find a technology by name', async() => {
        mockingoose(Technology).toReturn(technology, "findOne");
        const expected = await Technology.findOne(technology.name);
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(JSON.parse(JSON.stringify(technology)));
    });

});