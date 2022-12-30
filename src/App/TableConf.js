let config = [
    {
        name: 'Id',
        selector: row => row.id,
    },
    {
        name: 'Name',
        selector: row => row.name,
        minWidth: "200px",
        sortable: true,
    },
    {
        name: 'Upvote Count',
        selector: row => row.upvoteCount,
        minWidth: "150px",
        sortable: true,
    },

];

export default config;