import { store } from 'react-easy-state'

async function parseJson(response) {
    const jsonData = []
    const rawData = await response.text()
    rawData.split("\n")
        .forEach((jsonString) => {
            if ( (jsonString.length > 0) ) {
                try {
                    jsonData.push(JSON.parse(jsonString))
                } catch (error) {
                    console.error(error)
                }
            }
        })

    return jsonData
}

const reviewStore = store({
    reviews: [],
    async loadData(jsonUrl) {
        const response = await fetch(jsonUrl)
        const jsonData = await parseJson(response)
        reviewStore.reviews = jsonData
    },

    getReviewCountByScore() {
        // Define data object for counting reviews
        const reviewCountByScore = {}

        // Loop through reviews to count for each score
        reviewStore.reviews.forEach((review)=> {
            // Define score variable from overall property of review
            // Convert to string to use as a lookup key
            const score = review.overall.toString()

            // Check for existing key for this score
            if ( !Object.keys(reviewCountByScore).includes(score) ) {
                // If none exists, create new key with count of 0
                reviewCountByScore[score] = 0
            }

            // Add one to the review count for this score
            reviewCountByScore[score] += 1
        })

        // Return data object with review counts
        return reviewCountByScore;
    }
})

export default reviewStore
