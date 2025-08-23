import style from './Main-Page.module.scss'

export const MainPage = () => {
	return (
		<div className={style.page}>
			<div className={style.widget__mainBlock}>
				<div className={style.organization}>
                    org
				</div>
				<div className={style.minorBlock}>
					<div className={style.problem}>
                        prob
					</div>
					<div className={style.participation}>
                        part
					</div>
				</div>
				<div className={style.news}>
                    news
				</div>
			</div>
		</div>
	)
}