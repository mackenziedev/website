export interface GitHubRepo {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  topics: string[]
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repos")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}
