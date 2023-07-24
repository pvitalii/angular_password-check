const letters = `\\p{L}`;
const symbols = '[-._!"`\'#%&,: ; <>=@{}~\\$\\(\\) \\*\\+\\/\\\\\\?\\[\\]\\^\\|]'

export const REGEX = {
  EASY: new RegExp(`^${letters}{8,}$|^\\d{8,}$|^${symbols}{8,}$`, 'giu'),
  MEDIUM: new RegExp(`^(((?=.*\\d)(?=.*${symbols})(?!.*${letters}))|((?=.*\\d)(?!.*${symbols})(?=.*${letters}))|((?!.*\\d)(?=.*${symbols})(?=.*${letters}))).{8,}`, 'giu'),
  STRONG: new RegExp(`(?=.*\\d)(?=.*${symbols})(?=.*${letters}).{8,}`, 'giu')
}