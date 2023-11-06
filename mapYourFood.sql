--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Homebrew)
-- Dumped by pg_dump version 15.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: inventory; Type: TABLE; Schema: public; Owner: cameronlaplante
--

CREATE TABLE public.inventory (
    product_id integer NOT NULL,
    product_name character varying(100) NOT NULL,
    quantity integer NOT NULL,
    ingredients character varying(300),
    store_id integer
);


ALTER TABLE public.inventory OWNER TO cameronlaplante;

--
-- Name: inventory_product_id_seq; Type: SEQUENCE; Schema: public; Owner: cameronlaplante
--

CREATE SEQUENCE public.inventory_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inventory_product_id_seq OWNER TO cameronlaplante;

--
-- Name: inventory_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cameronlaplante
--

ALTER SEQUENCE public.inventory_product_id_seq OWNED BY public.inventory.product_id;


--
-- Name: stores; Type: TABLE; Schema: public; Owner: cameronlaplante
--

CREATE TABLE public.stores (
    store_id integer NOT NULL,
    store_name character varying(100) NOT NULL,
    location character varying(255)
);


ALTER TABLE public.stores OWNER TO cameronlaplante;

--
-- Name: stores_store_id_seq; Type: SEQUENCE; Schema: public; Owner: cameronlaplante
--

CREATE SEQUENCE public.stores_store_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stores_store_id_seq OWNER TO cameronlaplante;

--
-- Name: stores_store_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cameronlaplante
--

ALTER SEQUENCE public.stores_store_id_seq OWNED BY public.stores.store_id;


--
-- Name: inventory product_id; Type: DEFAULT; Schema: public; Owner: cameronlaplante
--

ALTER TABLE ONLY public.inventory ALTER COLUMN product_id SET DEFAULT nextval('public.inventory_product_id_seq'::regclass);


--
-- Name: stores store_id; Type: DEFAULT; Schema: public; Owner: cameronlaplante
--

ALTER TABLE ONLY public.stores ALTER COLUMN store_id SET DEFAULT nextval('public.stores_store_id_seq'::regclass);


--
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: cameronlaplante
--

COPY public.inventory (product_id, product_name, quantity, ingredients, store_id) FROM stdin;
119	Apples	50	{"Apples", "Water"}	4
120	Oranges	40	{"Oranges", "Citric Acid", "Water"}	4
121	Cheerios	20	{"Whole Grain Oats", "Sugar", "Honey", "Brown Sugar Syrup"}	4
122	Yogurt	25	{"Yogurt Culture", "Milk", "Live Active Cultures"}	4
123	Chocolate	15	{"Cocoa Mass", "Sugar", "Cocoa Butter", "Vanilla Extract"}	4
124	Butter	10	{"Cream", "Salt"}	4
125	Spaghetti	30	{"Durum Wheat Semolina", "Water"}	4
126	Rice	50	{"Rice", "Water"}	4
127	Peanut Butter	25	{"Peanuts", "Sugar", "Salt"}	4
128	Chicken Breasts	10	{"Chicken", "Salt", "Pepper"}	4
129	Bread	20	{"Flour", "Water", "Yeast"}	4
130	Popcorn	30	{"Popcorn Kernels", "Butter", "Salt"}	4
131	Cherries	45	{"Cherries", "Water", "Sugar"}	4
132	Canned Beans	28	{"Beans", "Tomato Sauce", "Onions"}	4
133	Honey	15	{"Honey"}	4
134	Pineapple Slices	25	{"Pineapple", "Water", "Sugar"}	4
135	Hot Dogs	18	{"Beef", "Pork", "Spices"}	4
136	Canned Corn	30	{"Corn", "Water", "Salt"}	4
137	Peaches	42	{"Peaches", "Water", "Sugar"}	4
138	Sausages	20	{"Pork", "Spices", "Salt"}	4
139	Almonds	12	{"Almonds", "Salt"}	4
140	Cheddar Cheese	14	{"Cheddar Cheese", "Milk", "Salt"}	4
141	Pasta	50	{"Durum Wheat Semolina", "Water"}	4
142	Steak	8	{"Beef", "Salt", "Pepper"}	4
143	Cucumbers	30	{"Cucumbers", "Water", "Salt"}	4
144	Potato Salad	20	{"Potatoes", "Mayonnaise", "Mustard", "Pickles"}	4
145	Cantaloupe	40	{"Cantaloupe", "Water", "Sugar"}	4
146	Cereal	22	{"Whole Grain Oats", "Honey", "Almonds"}	4
147	Pasta Shells	33	{"Durum Wheat Semolina", "Water"}	4
148	Salad Dressing	18	{"Vegetable Oil", "Vinegar", "Herbs"}	4
149	Cottage Cheese	20	{"Cottage Cheese", "Milk"}	4
150	Ginger Ale	30	{"Carbonated Water", "Sugar", "Ginger"}	4
151	Soy Sauce	16	{"Soybeans", "Wheat", "Salt"}	4
152	Maple Syrup	12	{"Maple Sap", "Sugar"}	4
153	Bell Peppers	45	{"Bell Peppers", "Water"}	4
154	Pork Chops	10	{"Pork", "Salt", "Spices"}	4
155	Peach Juice	18	{"Peaches", "Water", "Sugar"}	4
156	Corn Flakes	32	{"Corn", "Sugar", "Salt"}	4
157	Blueberries	37	{"Blueberries", "Water", "Sugar"}	4
158	Lemons	50	{"Lemons", "Water", "Sugar"}	4
159	Peppers	40	{"Bell Peppers", "Water", "Salt"}	4
160	Sardines	15	{"Sardines", "Olive Oil", "Salt"}	4
161	Pine Nuts	22	{"Pine Nuts"}	4
162	Soy Milk	20	{"Soybeans", "Water", "Vanilla"}	4
163	Walnuts	33	{"Walnuts"}	4
164	Kale	30	{"Kale", "Olive Oil", "Salt"}	4
165	Raspberries	40	{"Raspberries", "Water", "Sugar"}	4
166	Apricots	36	{"Apricots", "Water", "Sugar"}	4
167	Potato Chips	15	{"Potatoes", "Salt", "Oil"}	4
168	Tofu	18	{"Soybeans", "Water", "Nigari"}	4
169	Cherimoya	20	{"Cherimoya", "Water", "Sugar"}	4
170	Pumpkin Seeds	30	{"Pumpkin Seeds"}	4
1	Apples	50	{"Apples", "Water"}	1
2	Oranges	40	{"Oranges", "Citric Acid", "Water"}	2
3	Lettuce	30	{"Lettuce", "Water"}	3
4	Cheerios	20	{"Whole Grain Oats", "Sugar", "Honey", "Brown Sugar Syrup"}	1
5	Yogurt	25	{"Yogurt Culture", "Milk", "Live Active Cultures"}	2
6	Milk	50	{"Milk", "Vitamin D"}	3
7	Chocolate	15	{"Cocoa Mass", "Sugar", "Cocoa Butter", "Vanilla Extract"}	1
8	Butter	10	{"Cream", "Salt"}	2
9	Cream Cheese	15	{"Cream Cheese", "Milk", "Salt"}	3
10	Spaghetti	30	{"Durum Wheat Semolina", "Water"}	1
13	Rice	50	{"Rice", "Water"}	1
11	Peanut Butter	25	{"Peanuts", "Sugar", "Salt"}	2
12	Tomatoes	40	{"Tomatoes", "Citric Acid"}	3
14	Chicken Breasts	10	{"Chicken", "Salt", "Pepper"}	2
15	Eggs	60	{"Eggs"}	3
16	Bread	20	{"Flour", "Water", "Yeast"}	1
17	Popcorn	30	{"Popcorn Kernels", "Butter", "Salt"}	1
18	Cherries	45	{"Cherries", "Water", "Sugar"}	2
19	Lemonade	20	{"Lemons", "Sugar", "Water"}	3
20	Canned Beans	28	{"Beans", "Tomato Sauce", "Onions"}	1
21	Honey	15	{"Honey"}	2
22	Green Beans	40	{"Green Beans", "Garlic", "Butter"}	3
23	Pineapple Slices	25	{"Pineapple", "Water", "Sugar"}	1
24	Hot Dogs	18	{"Beef", "Pork", "Spices"}	2
25	Bagels	35	{"Flour", "Water", "Yeast"}	3
26	Canned Corn	30	{"Corn", "Water", "Salt"}	1
27	Peaches	42	{"Peaches", "Water", "Sugar"}	2
28	Grape Juice	28	{"Grapes", "Water", "Sugar"}	3
29	Sausages	20	{"Pork", "Spices", "Salt"}	1
30	Almonds	12	{"Almonds", "Salt"}	2
31	Avocado	33	{"Avocado", "Lime", "Salt"}	3
32	Cheddar Cheese	14	{"Cheddar Cheese", "Milk", "Salt"}	1
33	Pasta	50	{"Durum Wheat Semolina", "Water"}	2
34	Grapes	48	{"Grapes", "Water"}	3
35	Steak	8	{"Beef", "Salt", "Pepper"}	1
36	Cucumbers	30	{"Cucumbers", "Water", "Salt"}	2
37	Potato Salad	20	{"Potatoes", "Mayonnaise", "Mustard", "Pickles"}	1
38	Cantaloupe	40	{"Cantaloupe", "Water", "Sugar"}	2
39	Pineapple Juice	15	{"Pineapple", "Water", "Sugar"}	3
40	Cereal	22	{"Whole Grain Oats", "Honey", "Almonds"}	1
41	Pasta Shells	33	{"Durum Wheat Semolina", "Water"}	2
42	Green Tea	25	{"Green Tea Leaves", "Water"}	3
43	Salad Dressing	18	{"Vegetable Oil", "Vinegar", "Herbs"}	1
44	Cottage Cheese	20	{"Cottage Cheese", "Milk"}	2
45	Salsa	26	{"Tomatoes", "Onions", "Peppers"}	3
46	Ginger Ale	30	{"Carbonated Water", "Sugar", "Ginger"}	1
47	Soy Sauce	16	{"Soybeans", "Wheat", "Salt"}	2
48	Oatmeal	38	{"Rolled Oats", "Cinnamon", "Raisins"}	3
49	Maple Syrup	12	{"Maple Sap", "Sugar"}	1
50	Bell Peppers	45	{"Bell Peppers", "Water"}	2
51	Cucumber Salad	24	{"Cucumbers", "Onions", "Vinegar"}	3
52	Pork Chops	10	{"Pork", "Salt", "Spices"}	1
53	Peach Juice	18	{"Peaches", "Water", "Sugar"}	2
54	Garlic Bread	26	{"Bread", "Butter", "Garlic"}	3
55	Corn Flakes	32	{"Corn", "Sugar", "Salt"}	1
56	Blueberries	37	{"Blueberries", "Water", "Sugar"}	2
57	Lemons	50	{"Lemons", "Water", "Sugar"}	1
58	Peppers	40	{"Bell Peppers", "Water", "Salt"}	2
59	Baguette	28	{"Flour", "Water", "Yeast"}	3
60	Sardines	15	{"Sardines", "Olive Oil", "Salt"}	1
61	Pine Nuts	22	{"Pine Nuts"}	2
62	Tuna Steaks	26	{"Tuna", "Lemon", "Garlic"}	3
63	Soy Milk	20	{"Soybeans", "Water", "Vanilla"}	1
64	Walnuts	33	{"Walnuts"}	2
65	Mangoes	26	{"Mangoes", "Water", "Sugar"}	3
66	Kale	30	{"Kale", "Olive Oil", "Salt"}	1
67	Raspberries	40	{"Raspberries", "Water", "Sugar"}	2
68	Pasta Salad	22	{"Pasta", "Olives", "Tomatoes"}	3
69	Apricots	36	{"Apricots", "Water", "Sugar"}	1
70	Potato Chips	15	{"Potatoes", "Salt", "Oil"}	2
71	Sour Cream	26	{"Sour Cream", "Milk"}	3
72	Tofu	18	{"Soybeans", "Water", "Nigari"}	1
73	Cherimoya	20	{"Cherimoya", "Water", "Sugar"}	2
74	Bok Choy	35	{"Bok Choy", "Garlic", "Soy Sauce"}	3
75	Pumpkin Seeds	30	{"Pumpkin Seeds"}	1
76	Mushrooms	42	{"Mushrooms", "Butter", "Garlic"}	2
77	Coconut Milk	28	{"Coconut Milk", "Water"}	3
78	Avocado Toast	32	{"Avocado", "Bread", "Olive Oil"}	1
79	Blackberries	35	{"Blackberries", "Water", "Sugar"}	2
80	Sausage Links	18	{"Pork", "Spices", "Salt"}	3
81	Kiwi	15	{"Kiwi", "Water", "Sugar"}	1
82	Quinoa	22	{"Quinoa", "Water", "Salt"}	2
83	Greek Yogurt	26	{"Yogurt Culture", "Milk"}	3
171	Mushrooms	42	{"Mushrooms", "Butter", "Garlic"}	4
172	Avocado Toast	32	{"Avocado", "Bread", "Olive Oil"}	4
173	Blackberries	35	{"Blackberries", "Water", "Sugar"}	4
174	Kiwi	15	{"Kiwi", "Water", "Sugar"}	4
175	Quinoa	22	{"Quinoa", "Water", "Salt"}	4
\.


--
-- Data for Name: stores; Type: TABLE DATA; Schema: public; Owner: cameronlaplante
--

COPY public.stores (store_id, store_name, location) FROM stdin;
1	Fred Meyer	1225 W Bakerview Rd Bellingham, WA 98226
2	Costco	4125 Arctic Ave Bellingham, WA 98226 United States
3	Whole Foods Market	1030 Lakeway Dr Bellingham, WA 98229
4	Haggen	210 36th St Bellingham, WA 98225
\.


--
-- Name: inventory_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cameronlaplante
--

SELECT pg_catalog.setval('public.inventory_product_id_seq', 175, true);


--
-- Name: stores_store_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cameronlaplante
--

SELECT pg_catalog.setval('public.stores_store_id_seq', 5, true);


--
-- Name: inventory inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: cameronlaplante
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (product_id);


--
-- Name: stores stores_pkey; Type: CONSTRAINT; Schema: public; Owner: cameronlaplante
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_pkey PRIMARY KEY (store_id);


--
-- Name: inventory unique_product_store; Type: CONSTRAINT; Schema: public; Owner: cameronlaplante
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT unique_product_store UNIQUE (product_name, store_id);


--
-- PostgreSQL database dump complete
--

