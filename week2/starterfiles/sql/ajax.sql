--
-- Table structure for table `ajax`
--

CREATE TABLE `ajax` (
  `id` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ajax`
--
ALTER TABLE `ajax`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ajax`
--
ALTER TABLE `ajax`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;