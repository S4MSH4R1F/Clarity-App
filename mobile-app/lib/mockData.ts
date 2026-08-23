// MOCK DATA - placeholder values for UI development.
// Field anmes are intended to match Supabase once shared.
// Replace all of this with real Supabase queries once available. 
 
export const mockMPP = { 
    id: "mpp-001", name: "Jane Doe", // MOCK — placeholder MPP name 
    party: "Ontario Liberal Party", // MOCK 
    riding: "Toronto Centre", // MOCK 
    photoUrl: "https://placehold.co/120x120", // MOCK — placeholder image 
    }; 
    
export const mockBills = [ 
    { id: "bill-01", billNumber: "Bill 123", // MOCK 
    title: "An Act to Improve Rental Housing Standards", // MOCK 
    status: "In Committee", // MOCK 
    topic: "Housing", // MOCK 
    readTime: "2 min read", // MOCK 
    source: "OLA", // MOCK 
    }, 
    { id: "bill-02", billNumber: "Bill 87", // MOCK 
    title: "An Act Respecting Climate Resilience Funding", // MOCK 
    status: "Second Reading", // MOCK 
    topic: "Environment", // MOCK 
    readTime: "3 min read", // MOCK 
    source: "OLA", // MOCK 
    }, 
    { id: "bill-03", billNumber: "Bill 56", // MOCK 
    title: "An Act to Strengthen Consumer Protection", // MOCK 
    status: "First Reading", // MOCK 
    topic: "Consumer Affairs", // MOCK 
    readTime: "1 min read", // MOCK 
    source: "OLA", // MOCK 
    }, 
]; 
    
    export const mockArticles = [ 
        { id: "article-01", headline: "City Council Approves New Transit Funding", // MOCK 
        source: "CBC Toronto", // MOCK 
        date: "2026-08-10", // MOCK 
        topic: "Transit", // MOCK 
        city: "Toronto", // MOCK 
        }, 
        { id: "article-02", headline: "Province Announces New Housing Strategy", // MOCK 
        source: "CBC Ottawa", // MOCK 
        date: "2026-08-09", // MOCK 
        topic: "Housing", // MOCK 
        city: "Ottawa", // MOCK 
        }, 
    ]; 
    
    export const mockRecentVote = { billNumber: "Bill 45", // MOCK 
    title: "An Act to Amend the Education Funding Formula", // MOCK 
    vote: "In Favour", // MOCK 
    date: "2026-08-05", // MOCK 
    }; 
