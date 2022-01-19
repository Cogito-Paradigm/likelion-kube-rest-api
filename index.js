const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // CORS 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//임시 데이터
const infos = [
	{
		id: 1,
		title: 'Evil Dead 2013',
		detail:
			'Evil Dead 2013에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 2,
		title: 'Annabelle Creation (2017)',
		detail:
			'Annabelle Creation (2017)에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 3,
		title: 'Insidious The Last Key (2018)',
		detail:
			'Insidious The Last Key (2018)에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 4,
		title: 'The Conjuring 2 2016',
		detail:
			'The Conjuring 2 2016에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 5,
		title: 'Dawn of Justice',
		detail:
			'Dawn of Justice에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 6,
		title: 'Suicide Squad',
		detail:
			'Suicide Squad에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 7,
		title: 'John Wick Chapter 1',
		detail:
			'John Wick Chapter 1에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 8,
		title: 'John Wick Chapter 2',
		detail:
			'John Wick Chapter 2에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 9,
		title: 'John Wick Chapter 3',
		detail:
			'John Wick Chapter 3에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 10,
		title: 'Lost In Space S1',
		detail:
			'Lost In Space S1에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 11,
		title: 'Lost In Space S2',
		detail:
			'Lost In Space S2에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 12,
		title: 'Pacific Rim 2013',
		detail:
			'Pacific Rim 2013에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
	{
		id: 13,
		title: 'Pacific Rim Uprising 2017',
		detail:
			'Pacific Rim Uprising 2017에 관한 설명입니다. 아주 재미있는 영화입니다. 추천합니다. 두번보세요. 세번보세요',
	},
];

app.get('/', (req, res) => {
	//Hello World 데이터 반환
	res.send('Hello World');
});

app.get('/api/detail', (req, res) => {
	const id = req.query.id;
	const info = infos.filter((data) => Number(data.id) === Number(id));
	console.log('====================================');
	console.log(info);
	console.log('====================================');
	res.json({ info });
});

app.post('/api/detail', (req, res) => {
	const { id, title, detail } = req.body;
	const info = infos.concat({ id, title, detail });
	res.json({ info });
});

app.put('/api/detail', (req, res) => {
	const { id, title, detail } = req.body;
	const info = infos.map((data) => {
		if (data.id == id) {
			if (data.id == id) {
				data.title = title;
				data.detail = detail;
			}
		}
		return {
			id: data.id,
			title: data.title,
			detail: data.detail,
		};
	});
	res.json({ info });
});

app.patch('/api/detail', (req, res) => {
	const { id, title, detail } = req.body;
	const info = infos.map((data) => {
		if (data.id == id) {
			if (data.id == id) {
				data.title = title;
				data.detail = detail;
			}
		}
		return {
			id: data.id,
			title: data.title,
			detail: data.detail,
		};
	});
	res.json({ info });
});

app.delete('/api/detail', (req, res) => {
	const id = req.query.id;
	const info = infos.filter((data) => data.id != id);
	res.json({ info });
});

// http listen port 생성 서버 실행
app.listen(3000, () => console.log('Movie Rest-API RUN'));
