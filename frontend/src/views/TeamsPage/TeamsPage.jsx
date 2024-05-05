import React from 'react'
import './TeamsPage.scss'
import popular_teams from '@assets/popular-teams.png'
import team from '@assets/team.png'
import person from '@assets/Rectangle 56.png'

function TeamsPage() {
	return (
		<main className='teams__wrapper'>
			<div className='banner'>
				<div className='text'>
					<h1 className='first__h1'>Команды</h1>
					<h1 className='second__h1'>PolyGames</h1>
					<p className='commands__p'>
						В PolyGames представлено 23 команды разработчиков. <br />
						Все они студенты Московского Политеха с огромным потенциалом и
						желанием создавать что-то новое.
					</p>
				</div>
				<div className='photo'>
					<img className='team__img' src={team} alt='team' />
				</div>
			</div>
			<div className='popular__teams'>
				<h2 className='pop__teams__h2'>Популярные команды</h2>
				<div className='teams__photos'>
					<div>
						<img src={popular_teams} alt='team' />
						<p>Door 497</p>
					</div>
					<div>
						<img src={popular_teams} alt='team' />
						<p>Door 497</p>
					</div>
					<div>
						<img src={popular_teams} alt='team' />
						<p>Door 497</p>
					</div>
					<div>
						<img src={popular_teams} alt='team' />
						<p>Door 497</p>
					</div>
					<div>
						<img src={popular_teams} alt='team' />
						<p>Door 497</p>
					</div>
					<div>
						<img src={popular_teams} alt='team' />
						<p>Door 497</p>
					</div>
				</div>
			</div>
			<div className='down__banner'>
				<div className='first__block'>
					<div className='down__photo'>
						<img className='person__img' src={person} alt='person' />
					</div>
					<div className='down__text'>
						<h1>Хочешь создавать свои игры?</h1>
						<p>Собери свою команду</p>
						<p>Пройдите регистрацию на сайте</p>
						<p>Создайте и выложите игру</p>
						<h1>Будьте первыми!</h1>
					</div>
				</div>
				<div className='registration__btn'>
					<div className='btn__circle'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='15'
							height='14'
							viewBox='0 0 15 14'
							fill='none'
							className='btn__arrow'
						>
							<path
								d='M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z'
								fill='black'
							/>
						</svg>
					</div>
					<p className='describe__p'>Подробнее</p>
				</div>
			</div>
		</main>
	)
}

export default TeamsPage
