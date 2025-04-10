import { ESLint } from 'eslint'

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file)
    })
  )
  const filteredFiles = files.filter((_, i) => !isIgnored[i])
  return filteredFiles.join(' ')
}

export default {
  "*.{ts,tsx,js,jsx,scss}": [
    "npx prettier --config .prettierrc --write"
  ],
  '**/*.{ts,tsx,js,jsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [`eslint --fix ${filesToLint}`, `git add ${filesToLint}`, `eslint --max-warnings=0 ${filesToLint}`]
  },
  "**/*.scss": ["stylelint --fix", "git add", "stylelint --max-warnings=0"]
}
