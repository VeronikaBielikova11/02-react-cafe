import type { VoteType } from '../../types/votes'
import css from './VoteOptions.module.css'

interface VoteOptionsProps {
  onVote: (type: VoteType) => void
  onReset: () => void
  canReset: boolean
}

const options: { label: string; type: VoteType; symbol: string }[] = [
  { label: 'Good', type: 'good', symbol: '☺' },
  { label: 'Neutral', type: 'neutral', symbol: '∙' },
  { label: 'Bad', type: 'bad', symbol: '☹' },
]

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <div className={css.choices}>
        {options.map(({ label, type, symbol }) => (
          <button className={css.button} key={type} onClick={() => onVote(type)}>
            <span className={css.symbol} aria-hidden="true">{symbol}</span>{label}
          </button>
        ))}
      </div>
      {canReset && <button className={css.reset} onClick={onReset}>Reset responses</button>}
    </div>
  )
}
