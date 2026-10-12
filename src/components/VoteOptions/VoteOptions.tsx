import type { VoteType } from '../../types/votes'
import css from './VoteOptions.module.css'

interface VoteOptionsProps {
  onVote: (type: VoteType) => void
  onReset: () => void
  canReset: boolean
}

const options: { label: string; type: VoteType }[] = [
  { label: 'Good', type: 'good' },
  { label: 'Neutral', type: 'neutral' },
  { label: 'Bad', type: 'bad' },
]

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      {options.map(({ label, type }) => (
        <button className={css.button} key={type} onClick={() => onVote(type)}>
          {label}
        </button>
      ))}
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  )
}
