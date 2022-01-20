const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // CORS 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//임시 데이터
const infos = [
	{
		name: 'evil-dead-2013',
		title: 'Evil Dead 2013',
		detail:
			'Evil Dead 2013에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'annabelle-creation',
		title: 'Annabelle Creation (2017)',
		detail:
			'Annabelle Creation (2017)에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'insidious-the-last-key',
		title: 'Insidious The Last Key (2018)',
		detail:
			'Insidious The Last Key (2018)에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'the-conjuring-2',
		title: 'The Conjuring 2 2016',
		detail:
			'The Conjuring 2 2016에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'dawn-of-justice',
		title: 'Dawn of Justice',
		detail:
			'Dawn of Justice에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'suicide-squad',
		title: 'Suicide Squad',
		detail:
			'Suicide Squad에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'john-wick-chapter-1',
		title: 'John Wick Chapter 1',
		detail:
			'John Wick Chapter 1에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'john-wick-chapter-2',
		title: 'John Wick Chapter 2',
		detail:
			'John Wick Chapter 2에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'john-wick-chapter-3',
		title: 'John Wick Chapter 3',
		detail:
			'John Wick Chapter 3에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'lost-in-space-s1',
		title: 'Lost In Space S1',
		detail:
			'Lost In Space S1에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'lost-in-space-s2',
		title: 'Lost In Space S2',
		detail:
			'Lost In Space S2에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'pacific-rim-2013',
		title: 'Pacific Rim 2013',
		detail:
			'Pacific Rim 2013에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		name: 'pacific-rim-uprising-2017',
		title: 'Pacific Rim Uprising 2017',
		detail:
			'Pacific Rim Uprising 2017에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
];

app.get('/', (req, res) => {
	//Hello World 데이터 반환
	res.send('Hello World');
});

app.get('/api/movie', (req, res) => {
	res.json({ infos });
});

app.get('/api/movie/:moviename', (req, res) => {
	const moviename = req.params.moviename;
	const info = infos.filter((data) => data.name === moviename);
	console.log('====================================');
	console.log(info);
	console.log('====================================');
	res.json({ info });
});

app.post('/api/movie/:moviename', (req, res) => {
	const moviename = req.params.moviename;
	const { title, detail } = req.body;
	const info = infos.concat({ moviename, title, detail });
	res.json({ info });
});

app.put('/api/movie/:moviename', (req, res) => {
	const moviename = req.params.moviename;
	const { title, detail } = req.body;
	const info = infos.map((data) => {
		if (data.name == moviename) {
			data.title = title;
			data.detail = detail;
		}
		return {
			name: data.name,
			title: data.title,
			detail: data.detail,
		};
	});
	res.json({ info });
});

app.patch('/api/movie/:moviename', (req, res) => {
	const moviename = req.params.moviename;
	const { title, detail } = req.body;
	const info = infos.map((data) => {
		if (data.name == moviename) {
			data.title = title;
			data.detail = detail;
		}
		return {
			name: data.name,
			title: data.title,
			detail: data.detail,
		};
	});
	res.json({ info });
});

app.delete('/api/movie/:moviename', (req, res) => {
	const moviename = req.params.moviename;
	const info = infos.filter((data) => data.name != moviename);
	res.json({ info });
});

// http listen port 생성 서버 실행
app.listen(3000, () => console.log('Movie Rest-API RUN'));
