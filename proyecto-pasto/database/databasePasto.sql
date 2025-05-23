-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-05-2025 a las 00:44:25
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `databasepasto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos2`
--

CREATE TABLE `eventos2` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos2`
--

INSERT INTO `eventos2` (`id`, `titulo`, `fecha`, `hora`, `lugar`, `descripcion`) VALUES
(1, 'joooooooooooo', '2025-05-28', '14:02:00', '2', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos3`
--

CREATE TABLE `eventos3` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos4`
--

CREATE TABLE `eventos4` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos5`
--

CREATE TABLE `eventos5` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos6`
--

CREATE TABLE `eventos6` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos6`
--

INSERT INTO `eventos6` (`id`, `titulo`, `fecha`, `hora`, `lugar`, `descripcion`) VALUES
(1, '6', '0000-00-00', '18:06:00', '6', '6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventospre`
--

CREATE TABLE `eventospre` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `rol` enum('guiaturista','admin','usuario') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `correo`, `password`, `telefono`, `direccion`, `nombre`, `apellido`, `edad`, `fecha_nacimiento`, `rol`) VALUES
(1, 'admin@servidor.com', 'hashed_password123', '3001234567', 'Calle 123 #45-67, Bogotá', 'Juan', 'Pérez', 30, '1995-08-15', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos2`
--
ALTER TABLE `eventos2`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos3`
--
ALTER TABLE `eventos3`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos4`
--
ALTER TABLE `eventos4`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos5`
--
ALTER TABLE `eventos5`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos6`
--
ALTER TABLE `eventos6`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventospre`
--
ALTER TABLE `eventospre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos2`
--
ALTER TABLE `eventos2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `eventos3`
--
ALTER TABLE `eventos3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eventos4`
--
ALTER TABLE `eventos4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eventos5`
--
ALTER TABLE `eventos5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eventos6`
--
ALTER TABLE `eventos6`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `eventospre`
--
ALTER TABLE `eventospre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
