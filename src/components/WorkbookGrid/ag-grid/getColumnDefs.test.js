import { getColumnDefs as sut } from './getColumnDefs';

describe('getColumnDefs', () => {
    let json;
    
    beforeEach(() => {
        json = [{"A":"athlete","B":"age","C":"country","D":"year","E":"date","F":"sport","G":"gold","H":"silver","I":"bronze","J":"total"},{"A":"Gong Jinjie","B":"25","C":"China","D":"2012","E":"12/8/12","F":"Cycling","G":"0","H":"1","I":"0","J":"1"},{"A":"Olga Kaniskina","B":"27","C":"Russia","D":"2012","E":"12/8/12","F":"Athletics","G":"0","H":"1","I":"0","J":"1"},{"A":"Vavrinec Hradílek","B":"25","C":"Czech Republic","D":"2012","E":"12/8/12","F":"Canoeing","G":"0","H":"1","I":"0","J":"1"},{"A":"Jakov Fak","B":"22","C":"Croatia","D":"2010","E":"28/02/2010","F":"Biathlon","G":"0","H":"0","I":"1","J":"1"},{"A":"Jesse Sergent","B":"24","C":"New Zealand","D":"2012","E":"12/8/12","F":"Cycling","G":"0","H":"0","I":"1","J":"1"},{"A":"Jeong Seong-Ryong","B":"27","C":"South Korea","D":"2012","E":"12/8/12","F":"Football","G":"0","H":"0","I":"1","J":"1"},{"A":"Fredrik Lööf","B":"42","C":"Sweden","D":"2012","E":"12/8/12","F":"Sailing","G":"1","H":"0","I":"0","J":"1"},{"A":"Jo In-Cheol","B":"24","C":"South Korea","D":"2000","E":"1/10/00","F":"Judo","G":"0","H":"1","I":"0","J":"1"},{"A":"William Lockwood","B":"24","C":"Australia","D":"2012","E":"12/8/12","F":"Rowing","G":"0","H":"1","I":"0","J":"1"}];
    });

    it('should format to column defs', () => {
        let expectedColumnDefs = [
            {
                headerName: 'A',
            },
            {
                headerName: 'A',
                field: 'A'
            },
            {
                headerName: 'B',
                field: 'B'
            },
            {
                headerName: 'C',
                field: 'C'
            },
            {
                headerName: 'D',
                field: 'D'
            },
            {
                headerName: 'E',
                field: 'E'
            },
            {
                headerName: 'F',
                field: 'F'
            },
            {
                headerName: 'G',
                field: 'G'
            },
            {
                headerName: 'H',
                field: 'H'
            },
            {
                headerName: 'I',
                field: 'I'
            },
            {
                headerName: 'J',
                field: 'J'
            },
        ]
        
        expect(sut(json)).toEqual(expectedColumnDefs);
    });
});