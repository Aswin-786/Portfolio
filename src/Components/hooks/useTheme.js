import React from 'react'

const useTheme = () => {
  const darkQuery = "(prefer-color-scheme: dark)"
  const [mode, setMode] = React.useState("")

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(darkQuery)
    const userPref = window.localStorage.getItem('theme')

    const handleChange = () => {
      if (userPref) {
        let check = userPref === 'dark' ? ' dark' : 'light'
        setMode(check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        let check = mediaQuery.matches ? 'dark' : 'light'
        setMode(check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  React.useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [mode])
  return [mode, setMode]
}
export default useTheme