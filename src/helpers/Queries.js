export const QUERIES = {
  episodes1: `
    query {
      episodes(page: 1) {
        results {
          id
          name
          air_date
          created
          characters {
            name
          }
        }
      }
    }
`,
  episodes2: `
    query {
      episodes(page: 2) {
        results {
          id
          name
          air_date
          created
          characters {
            name
          }
        }
      }
    }
`,
  episodes3: `
    query {
      episodes(page: 3) {
        results {
          id
          name
          air_date
          created
          characters {
            name
          }
        }
      }
    }
`,
};
