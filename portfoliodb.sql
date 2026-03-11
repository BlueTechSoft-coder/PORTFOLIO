-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2025 at 11:42 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfoliodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(25) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `mobile`, `subject`, `message`, `reg_date`) VALUES
(1, 'Andrew Barasa', 'andrewbarasa412@gmail.com', '0708909399', 'Student portal ', 'Hi', '2025-08-26 12:37:17'),
(2, 'Andrew Barasa', 'andrewbarasa412@gmail.com', '0708909399', 'Student portal ', 'Hi', '2025-08-26 12:37:49'),
(3, 'Andrew Barasa', 'andrewbarasa412@gmail.com', '0708909399', 'Student portal ', 'Hi', '2025-08-26 12:39:26'),
(4, 'Andrew Barasa', 'andrewbarasa412@gmail.com', '0708909399', 'Student portal ', 'Hi', '2025-08-26 12:39:39'),
(5, 'Benson Baraka', 'bensey035@gmail.com', '0708909399', 'TVETs', 'Hello', '2025-08-26 12:41:04'),
(6, 'Benson Baraka', 'bensey035@gmail.com', '0708909399', 'TVETs', 'Hello', '2025-08-26 12:41:40'),
(7, 'Benson Baraka', 'bensey035@gmail.com', '0708909399', 'TVETs', 'Hello', '2025-08-26 12:41:45'),
(8, 'Benson Baraka', 'bensey035@gmail.com', '0708909399', 'TVETs', 'Hello', '2025-08-26 12:41:45'),
(9, 'Benson Baraka', 'bensey035@gmail.com', '0708909399', 'TVETs', 'Hello', '2025-08-26 12:41:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
