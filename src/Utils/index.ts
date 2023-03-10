export const randomId = function(length = 8) {
    return Math.random().toString(36).substring(2, length+2);
};

export interface FileProp {
    noteType: string,
    clientName: string,
    id: string,
}