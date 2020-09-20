-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 20, 2020 at 05:44 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id14208488_kafebar`
--
CREATE DATABASE IF NOT EXISTS `id14208488_kafebar` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id14208488_kafebar`;

-- --------------------------------------------------------

--
-- Table structure for table `konobar`
--

CREATE TABLE `konobar` (
  `idRadnika` int(11) NOT NULL,
  `pIme` varchar(30) NOT NULL,
  `adresaStan` varchar(150) NOT NULL,
  `brMob` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `pinKod` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `konobar`
--

INSERT INTO `konobar` (`idRadnika`, `pIme`, `adresaStan`, `brMob`, `email`, `pinKod`, `admin`) VALUES
(0, 'null', 'null', '00000000', 'nullnull@null.com', '$2y$10$rR5kltu3EDsOPuTB6AEmoO3YpRdZuP5JY2WnO6jbr.fGYkHiWVLXe', 1),
(1, 'Demir Dazdarevic', 'Rifata Burdzevica 66', '0637418441', 'ddazdarevic@gmail.com', '$2y$10$lCpPErqBKihiBmgbnPG/lOClqZ6EFQWakldlt3he4rtEoEX3Spzy2', 0),
(3, 'Suada Dazdarevic', 'Rifata Burdz 66', '0600800522', 'demir_dazdarevic@icloud.com', '$2y$10$XzMFIz/V5qxr1znG2Fm35.YThDXd3BdAAbzyawzBic5qslnWL6OTm', 0),
(4, 'Aleksandar M', 'Kolega Kuca 123', '0658989654', 'acomilanov@gmail.com', '$2y$10$wqulphSCTLDQF1NltRde2O.wC.5u17qXYrTYZMpFWeMhDbxv3y.C6', 0),
(5, 'neki covek', 'zivi tamo negde 33', '65986547895', 'lopiratorva@live.com', '$2y$10$sbp5v8c24hdhR82liVwGbeyKB9V7Ex31zq7fs2LziYvv6eVpzBmcm', 0),
(6, 'pica picerija', 'neka kobajagi 44', '89564877415', 'nekiluidbi@live.com', '$2y$10$m/aY9u3qQPaYP3ow7/ZoW.iJePyV1L4Ei4VIl4I2l7ndM8H/SZbWu', 0),
(7, 'lopirati', 'kangorulat 55', '659845669', 'kdosakdoaskdo@live.com', '$2y$10$dRRGRof7lYgQDOdtxUEQ7ORrL.BW/DDSSy0ur/HVQm5Nau3vq9pne', 0),
(13, 'Administrator', 'Kafe Bar Dem', '020311755', 'admin@kafebar.com', '$2y$10$tc.4g0oqm4082GTmE0H4mu1BktreVsan2VjNwmyBeLqOIi.RQAy1a', 1),
(14, 'novi radnik', 'negde zivi', '06548956', 'obrisimesad@live.com', '$2y$10$TKdrwst1Uo3HupIhPbGlMOfRUUSSpOqhcTUMB90qykt28JikkNi6W', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pice`
--

CREATE TABLE `pice` (
  `idPica` int(11) NOT NULL,
  `imePica` varchar(15) NOT NULL,
  `fotografijaPica` varchar(50) NOT NULL,
  `tipPica` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pice`
--

INSERT INTO `pice` (`idPica`, `imePica`, `fotografijaPica`, `tipPica`) VALUES
(1, 'pivo', '../../assets/drinks/beer.jpg', 'alkoholno'),
(2, 'koka kola', '../../assets/drinks/cocacola.jpg', 'bezalkoholno'),
(3, 'koktel', '../../assets/drinks/cocktail.jpg', 'alkoholno'),
(4, 'esspreso', '../../assets/drinks/esspreso.jpg', 'bezalkoholno'),
(5, 'topla čokolada', '../../assets/drinks/hotchocolate.jpg', 'bezalkoholno'),
(6, 'ice kafa', '../../assets/drinks/icecoffe.jpg', 'bezalkoholno'),
(7, 'djus', '../../assets/drinks/juice.jpg', 'bezalkoholno'),
(8, 'mineralna voda', '../../assets/drinks/knjazmilos.jpg', 'bezalkoholno'),
(9, 'latte', '../../assets/drinks/late2.jpg', 'bezalkoholno'),
(10, 'margarita', '../../assets/drinks/margarita.jpg', 'alkoholno'),
(11, 'milk-shake', '../../assets/drinks/milkshake.jpg', 'bezalkoholno'),
(12, 'red bull', '../../assets/drinks/redbull.jpg', 'bezalkoholno'),
(13, 'biljni čaj', '../../assets/drinks/tea.jpg', 'bezalkoholno'),
(14, 'turska kafa', '../../assets/drinks/turkishcoffe.jpg', 'bezalkoholno'),
(15, 'negazirana voda', '../../assets/drinks/water.jpg', 'bezalkoholno'),
(16, 'crveno vino', '../../assets/drinks/wine.jpg', 'alkoholno');

-- --------------------------------------------------------

--
-- Table structure for table `porudzbina`
--

CREATE TABLE `porudzbina` (
  `idPorudz` int(11) NOT NULL,
  `vremePorudz` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `porudzbina`
--

INSERT INTO `porudzbina` (`idPorudz`, `vremePorudz`) VALUES
(85, '2020-09-20 02:50:17'),
(87, '2020-09-20 02:52:14'),
(89, '2020-09-20 02:54:24'),
(90, '2020-09-20 02:54:37'),
(91, '2020-09-20 02:55:23'),
(92, '2020-09-20 02:55:33'),
(93, '2020-09-20 05:35:56'),
(96, '2020-09-20 05:36:39'),
(98, '2020-09-20 05:37:04'),
(99, '2020-09-20 05:38:46'),
(100, '2020-09-20 03:39:49'),
(101, '2020-09-20 03:39:52'),
(102, '2020-09-20 03:40:51'),
(103, '2020-09-20 05:41:00'),
(105, '2020-09-20 05:41:19'),
(106, '2020-09-20 05:41:28'),
(109, '2020-09-20 05:44:19'),
(110, '2020-09-20 05:44:32');

-- --------------------------------------------------------

--
-- Table structure for table `racun`
--

CREATE TABLE `racun` (
  `idRacuna` int(11) NOT NULL,
  `datumPlacanja` datetime NOT NULL DEFAULT current_timestamp(),
  `valuta` varchar(5) NOT NULL DEFAULT 'rsd.',
  `porudzbina` int(11) NOT NULL,
  `idRadnika` int(11) NOT NULL,
  `cenaUkupna` double NOT NULL,
  `sto` int(11) NOT NULL,
  `placen` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `racun`
--

INSERT INTO `racun` (`idRacuna`, `datumPlacanja`, `valuta`, `porudzbina`, `idRadnika`, `cenaUkupna`, `sto`, `placen`) VALUES
(4, '2020-09-20 02:54:47', 'rsd.', 85, 1, 360, 4, 1),
(5, '2020-09-20 02:52:21', 'rsd.', 87, 1, 320, 2, 0),
(6, '2020-09-20 02:54:47', 'rsd.', 89, 1, 240, 4, 1),
(8, '2020-09-20 05:44:38', 'rsd.', 93, 13, 240, 4, 1),
(10, '2020-09-20 05:44:38', 'rsd.', 109, 13, 150, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `stavkaporudzbine`
--

CREATE TABLE `stavkaporudzbine` (
  `idPorudz` int(11) NOT NULL,
  `redBr` int(11) NOT NULL,
  `kolicina` int(11) NOT NULL,
  `idZalihe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stavkaporudzbine`
--

INSERT INTO `stavkaporudzbine` (`idPorudz`, `redBr`, `kolicina`, `idZalihe`) VALUES
(85, 6, 3, 2),
(87, 7, 1, 2),
(87, 8, 1, 3),
(89, 9, 2, 2),
(93, 10, 2, 2),
(109, 11, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `stolovi`
--

CREATE TABLE `stolovi` (
  `sifraStola` int(11) NOT NULL,
  `zauzet` tinyint(1) NOT NULL DEFAULT 0,
  `opisStola` varchar(60) DEFAULT NULL,
  `brStolica` int(11) NOT NULL,
  `idRadnika` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stolovi`
--

INSERT INTO `stolovi` (`sifraStola`, `zauzet`, `opisStola`, `brStolica`, `idRadnika`) VALUES
(0, 0, 'Visoko sedenje, prvi sto do prozora. Sto za četiri osobe.', 4, NULL),
(2, 0, 'Visoko sedenje, drugi sto od prozora. Sto za tri osobe.', 3, 0),
(3, 0, 'Visoko sedenje, drugi sto od šanka. Sto za tri osobe.', 3, 0),
(4, 0, 'Visoko sedenje, prvi sto do šanka. Sto za četiri osobe.', 4, 0),
(5, 0, 'Sto za šankom. Sto za dvoje.', 2, 0),
(6, 0, 'Sto na terasi. Sto za dvoje.', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `zaliha`
--

CREATE TABLE `zaliha` (
  `idZalihe` int(11) NOT NULL,
  `kolicina` int(11) NOT NULL,
  `prodajnaCena` double NOT NULL,
  `idPica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `zaliha`
--

INSERT INTO `zaliha` (`idZalihe`, `kolicina`, `prodajnaCena`, `idPica`) VALUES
(1, 2, 150, 1),
(2, 3, 120, 2),
(3, 3, 200, 3),
(4, 0, 90, 4),
(5, 0, 100, 5),
(6, 0, 100, 6),
(7, 0, 100, 7),
(8, 0, 100, 8),
(9, 0, 120, 9),
(10, 0, 200, 10),
(11, 0, 130, 11),
(12, 0, 200, 12),
(13, 0, 100, 13),
(14, 0, 70, 14),
(15, 0, 80, 15),
(16, 0, 150, 16);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `konobar`
--
ALTER TABLE `konobar`
  ADD PRIMARY KEY (`idRadnika`);

--
-- Indexes for table `pice`
--
ALTER TABLE `pice`
  ADD PRIMARY KEY (`idPica`);

--
-- Indexes for table `porudzbina`
--
ALTER TABLE `porudzbina`
  ADD PRIMARY KEY (`idPorudz`);

--
-- Indexes for table `racun`
--
ALTER TABLE `racun`
  ADD PRIMARY KEY (`idRacuna`),
  ADD KEY `porudzbina` (`porudzbina`),
  ADD KEY `radnik` (`idRadnika`),
  ADD KEY `sto` (`sto`) USING BTREE;

--
-- Indexes for table `stavkaporudzbine`
--
ALTER TABLE `stavkaporudzbine`
  ADD PRIMARY KEY (`redBr`,`idPorudz`),
  ADD KEY `idPorudz` (`idPorudz`),
  ADD KEY `idZalihe` (`idZalihe`);

--
-- Indexes for table `stolovi`
--
ALTER TABLE `stolovi`
  ADD PRIMARY KEY (`sifraStola`),
  ADD KEY `idRadnika` (`idRadnika`);

--
-- Indexes for table `zaliha`
--
ALTER TABLE `zaliha`
  ADD PRIMARY KEY (`idZalihe`),
  ADD KEY `idPica` (`idPica`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `konobar`
--
ALTER TABLE `konobar`
  MODIFY `idRadnika` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `pice`
--
ALTER TABLE `pice`
  MODIFY `idPica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `porudzbina`
--
ALTER TABLE `porudzbina`
  MODIFY `idPorudz` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `racun`
--
ALTER TABLE `racun`
  MODIFY `idRacuna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `stavkaporudzbine`
--
ALTER TABLE `stavkaporudzbine`
  MODIFY `redBr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `stolovi`
--
ALTER TABLE `stolovi`
  MODIFY `sifraStola` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `zaliha`
--
ALTER TABLE `zaliha`
  MODIFY `idZalihe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `racun`
--
ALTER TABLE `racun`
  ADD CONSTRAINT `porudzbina` FOREIGN KEY (`porudzbina`) REFERENCES `porudzbina` (`idPorudz`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `radnik` FOREIGN KEY (`idRadnika`) REFERENCES `konobar` (`idRadnika`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `stofk` FOREIGN KEY (`sto`) REFERENCES `stolovi` (`sifraStola`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `stavkaporudzbine`
--
ALTER TABLE `stavkaporudzbine`
  ADD CONSTRAINT `idPorudz` FOREIGN KEY (`idPorudz`) REFERENCES `porudzbina` (`idPorudz`),
  ADD CONSTRAINT `idZalihe` FOREIGN KEY (`idZalihe`) REFERENCES `zaliha` (`idZalihe`);

--
-- Constraints for table `stolovi`
--
ALTER TABLE `stolovi`
  ADD CONSTRAINT `idRadnika` FOREIGN KEY (`idRadnika`) REFERENCES `konobar` (`idRadnika`) ON UPDATE NO ACTION;

--
-- Constraints for table `zaliha`
--
ALTER TABLE `zaliha`
  ADD CONSTRAINT `idPica` FOREIGN KEY (`idPica`) REFERENCES `pice` (`idPica`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
