import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>
				Welcome - thanks for caring about your colleagues.
			</h1>
			<div>
				<div>
					<h2>Where exactly is your printer?</h2>
					<div>
						Here will be the functionality to choose locations.
					</div>
				</div>
				<div>
					<h2>What printer is it?</h2>
					<div>
						Printers relative to location.
					</div>
				</div>
				<div>
					<h2>What printer model is it?</h2>
					<div>
						Printers relative to location.
					</div>
				</div>
				<div>
					<h2>What consumable needs to be ordered?</h2>
					<div>
						Consumables, typically toner of a specific color relative to printer model.
					</div>
				</div>
				<div>
					<h2>Current selection</h2>
					<div>
						Summary
					</div>
					<div>
						&quot;Ok&quot; or &quot;place order&quot; button
					</div>
				</div>
			</div>
		</main>
	)
}
