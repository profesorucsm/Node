-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 22, 2022 at 01:46 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `musicdb`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertar_albums` (IN `pTitulo` VARCHAR(200), IN `pLanzado` DATE, IN `pPrecio` DOUBLE, IN `pGenero` VARCHAR(150))  NO SQL
insert into albums (titulo, lanzado, precio, genero) values (pTitulo, pLanzado, pPrecio, pGenero)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listar_albums` ()  NO SQL
select * from albums$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Albums`
--

CREATE TABLE `Albums` (
  `id` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `lanzado` date NOT NULL,
  `precio` double NOT NULL,
  `genero` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Albums`
--

INSERT INTO `Albums` (`id`, `titulo`, `lanzado`, `precio`, `genero`) VALUES
(1, 'Unplugged Soda Estereo', '2020-10-02', 15, 'rock'),
(3, 'Tiempos', '2015-12-18', 30, 'latino'),
(4, 'Vivo', '2022-11-15', 20, 'Rock'),
(5, 'ligero', '2022-11-07', 20, 'rock y jazz'),
(6, 'musicaLigera', '2022-11-15', 23, 'rockLatino'),
(7, 'la mar', '2016-11-12', 50, 'jazz');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Albums`
--
ALTER TABLE `Albums`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Albums`
--
ALTER TABLE `Albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;