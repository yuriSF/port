var allVerbs;
allVerbs = ['llover', 'cargar', 'acordar', 'correr', 'tratar', 'enseñar', 'alegrar', 'describir', 'mezclar', 'distinguir', 'ver', 'regar', 'ensuciar', 'viajar', 'divertir', 'divorciar', 'aplicar', 'exigir', 'interesar', 'educar', 'florecer', 'vestir', 'afirmar', 'limpiar', 'satirizar', 'acostar', 'casar', 'acercarse', 'soler', 'traer', 'alentar', 'funcionar', 'decidir', 'oír', 'mirar', 'dirigir', 'consentir', 'elegir', 'entender', 'estimar', 'respetar', 'aburrirse', 'desagradar', 'calcular', 'atacar', 'enriquecer', 'madurar', 'cesar', 'participar', 'protestar', 'admirar', 'molestar', 'exponer', 'valer', 'manejar', 'apretar', 'saltar', 'arreglar', 'suponer', 'situar', 'exportar', 'pintar', 'explorar', 'colonizar', 'convenir', 'variar', 'descansar', 'abrazar', 'expresar', 'descender', 'disgustar', 'evitar', 'acampar', 'lamentar', 'jurar', 'enflaquecerse', 'causar', 'señalar', 'escuchar', 'curar', 'dedicarse', 'entrar', 'burlarse', 'terminar', 'colgar', 'gobernar', 'acortar', 'huir', 'detenerse', 'preservar', 'dejar', 'secar', 'llenar', 'conocer', 'oponer', 'vivir', 'decir', 'diseñar', 'chismear', 'suceder', 'contaminar', 'continuar', 'quebrarse', 'chocar', 'pelear', 'tragar', 'amenazar', 'explotar', 'bañarse', 'abortar', 'destruir', 'reinar', 'detestar', 'bajar', 'oler', 'purificar', 'proponer', 'invitar', 'sacar', 'dedicar', 'anhelar', 'asustar', 'iniciar', 'apostar', 'construir', 'glorificar', 'legalizar', 'perder', 'cocinar', 'lograr', 'patinar', 'escoger', 'evacuar', 'colocar', 'importar', 'despertarse', 'enfadarse', 'significar', 'guiar', 'crucificar', 'deshacer', 'amanecer', 'distribuir', 'atraer', 'borrar', 'aguantar', 'alquilar', 'sentir', 'controlar', 'tirar', 'tapar', 'echarse', 'bautizar', 'enfadar', 'quemar', 'enviar', 'entusiasmarse', 'vestirse', 'meter', 'equivocar', 'enamorarse', 'aprobar', 'ponerse', 'adivinar', 'agorar', 'cerrar', 'acostarse', 'confiscar', 'buscar', 'lavar', 'aceptar', 'crecer', 'ducharse', 'quedarse', 'surgir', 'helar', 'navegar', 'fascinar', 'temer', 'vomit', 'soportar', 'dar', 'gritar', 'brindar', 'invocar', 'cazar', 'inmigrar', 'masticar', 'mantener', 'doler', 'abordar', 'castigar', 'pertenecer', 'insultar', 'caminar', 'visitar', 'cubrir', 'caracterizar', 'reñir', 'reparar', 'reservar', 'recibir', 'organizar', 'sonreír', 'heredar', 'aconsejar', 'conquistar', 'requerir', 'burlar', 'maquillarse', 'juntarse', 'encender', 'matar', 'quebrar', 'odiar', 'lastimar', 'sugerir', 'enojar', 'generalizar', 'querer', 'asistir', 'perdonar', 'doblar', 'despedir', 'teñir', 'comunicar', 'bailar', 'averiguar', 'acontecer', 'costar', 'maquillar', 'realizar', 'insistir', 'probar', 'apagar', 'jactarse', 'registrar', 'divertirse', 'intentar', 'desagradecer', 'charlar', 'instalar', 'admitir', 'interpretar', 'adornar', 'dormirse', 'aspirar', 'ser', 'llegar', 'luchar', 'recoger', 'preferir', 'acompañar', 'alegrarse', 'hacer', 'cancelar', 'esquiar', 'contribuir', 'sobrevivir', 'padecer', 'abrir', 'beber', 'picar', 'callarse', 'afligir', 'reconocer', 'emborrachar', 'pegar', 'saber', 'poder', 'llevar', 'aumentar', 'renovar', 'volar', 'tropezar', 'acercar', 'prepararse', 'exhibir', 'hallar', 'comprender', 'convencer', 'negarse', 'salvar', 'recomendar', 'cobrar', 'revelar', 'poner', 'ejercer', 'añadir', 'ocurrir', 'violar', 'soñar', 'convidar', 'romper', 'fingir', 'despertar', 'apoyar', 'replicar', 'dibujar', 'repasar', 'llamar', 'explicar', 'regular', 'bucear', 'amar', 'permanecer', 'sentar', 'obedecer', 'barrer', 'toser', 'batir', 'responder', 'componer', 'producir', 'sentarse', 'yacer', 'envejecer', 'enamorar', 'preparar', 'tener', 'olvidar', 'agradar', 'ilustrar', 'comenzar', 'hervir', 'ayudar', 'caber', 'defender', 'acostumbrar', 'zambullirse', 'salir', 'quedar', 'jugar', 'anunciar', 'depender', 'pensar', 'echar', 'arrojar', 'mudarse', 'confiar', 'cansar', 'duchar', 'sorprender', 'acostumbrarse', 'llorar', 'sustituir', 'resolver', 'imprimir', 'bañar', 'clasificar', 'necesitar', 'notar', 'comprar', 'disminuir', 'ganar', 'rehusar', 'enflaquecer', 'sonar', 'bordar', 'sacudir', 'predecir', 'graduar', 'enterarse', 'freír', 'contar', 'ahorrar', 'compartir', 'presentir', 'pesar', 'regresar', 'merecer', 'lavarse', 'marcar', 'estar', 'confirmar', 'vender', 'ofender', 'pagar', 'desarrollarse', 'avanzar', 'calentar', 'arrepentirse', 'renunciar', 'parecer', 'engañar', 'advertir', 'errar', 'unir', 'montar', 'cortar', 'merendar', 'demostrar', 'celebrar', 'cumplir', 'conseguir', 'empezar', 'atravesar', 'comer', 'detener', 'enriquecerse', 'contener', 'cenar', 'andar', 'acabar', 'alcanzar', 'secarse', 'llamarse', 'cruzar', 'afeitar', 'entregar', 'parar', 'hallarse', 'plantar', 'envejecerse', 'criar', 'brillar', 'faltar', 'perseguir', 'criarse', 'entusiasmar', 'cuidar', 'venir', 'fijar', 'sufrir', 'caer', 'guardar', 'repetir', 'entretener', 'reducir', 'durar', 'escribir', 'sacrificar', 'torcer', 'traducir', 'encontrar', 'mentir', 'rogar', 'enfermarse', 'servir', 'declarar', 'abusar', 'confesar', 'ir', 'emborracharse', 'coger', 'deber', 'extinguir', 'utilizar', 'corregir', 'acordarse', 'simbolizar', 'obligar', 'equivocarse', 'matricularse', 'contestar', 'medir', 'combatir', 'competir', 'pescar', 'platicar', 'devolver', 'vencer', 'aparecer', 'broncearse', 'extender', 'vaciar', 'leer', 'cultivar', 'apreciar', 'constituir', 'calmar', 'graduarse', 'desayunar', 'adorar', 'conversar', 'proseguir', 'sentirse', 'gruñir', 'desaparecer', 'verificar', 'peinarse', 'copiar', 'ofrecer', 'emplear', 'enojarse', 'desarrollar', 'preguntarse', 'descubrir', 'nadar', 'depositar', 'deprimir', 'mandar', 'moverse', 'fumar', 'casarse', 'rezar', 'calmarse', 'civilizar', 'resultar', 'enfermar', 'informar', 'regalar', 'pasar', 'emigrar', 'divorciarse', 'juntar', 'suspirar', 'tomar', 'formar', 'establecer', 'gustar', 'fortalecer', 'aplaudir', 'untar', 'regir', 'esconder', 'aprender', 'volver', 'desear', 'olvidarse', 'quemarse', 'subir', 'callar', 'convertir', 'negar', 'regatear', 'tañer', 'clarificar', 'abandonar', 'afeitarse', 'provocar', 'invertir', 'presentar', 'devorar', 'influir', 'culpar', 'cansarse', 'hablar', 'permitir', 'creer', 'estudiar', 'fabricar', 'mostrar', 'ubicar', 'nevar', 'criticar', 'oponerse', 'derretir', 'eliminar', 'renacer', 'consumir', 'atender', 'usar', 'tocar', 'reciclar', 'comunicarse', 'censurar', 'avisar', 'consistir', 'aliviar', 'encantar', 'practicar', 'decidirse', 'dudar', 'actuar', 'esperar', 'agradecer', 'inducir', 'decorar', 'gastar', 'obtener', 'saludar', 'morir', 'respirar', 'besar', 'quejarse', 'trabajar', 'rechazar', 'lanzar', 'prohibir', 'calentarse', 'conservar', 'firmar', 'peinar', 'conducir', 'votar', 'dormir', 'matricular', 'modificar', 'mudar(se)', 'efectuar', 'seguir', 'robar', 'coser', 'levantarse', 'prever', 'indicar', 'tardar', 'crear', 'negociar', 'condenar', 'disfrutar', 'invadir', 'triunfar', 'proteger', 'irse', 'mover', 'reír', 'cepillar', 'registrarse', 'bendecir', 'herir', 'almorzar', 'preguntar', 'entrevistar', 'recordar', 'investigar', 'nacer', 'pedir', 'planchar', 'esconderse', 'publicar', 'reportar', 'inventar', 'ahorcar', 'introducir', 'incluir', 'satisfacer', 'conjugar', 'prometer', 'asustarse', 'levantar', 'felicitar', 'aburrir', 'ladrar', 'asociar', 'atreverse'];
