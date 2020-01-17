// Tag 8 - 15.01.2020
// Informatik: Verkettete Listen(einfach, mehrfach, zyklisch)
// (Datenstruckturen) Näre Bäume
// Maps, Sets, Quene´s und Stracks

/*
Struckturen
===========
1 - Listen
2 - Bäume
3 - Sets
4 - Maps
5 - Stacks
6 - Queue
7 - Nodes

1 - Listen
Datenstrukturen
================
Listen: (Linked lists)
Verkettete Listen           3->5->4->2->29
    Doppelte Eintrage möglich
    Sotierung

Mehrfachverkette Listen     <-3<->5<->4->
Zyclische Listen            3->5->4->(Auf das erste)

2 - Bäume
N*äre Bäume (Binärer Baum) 
=============================
|- 3
    |- 2
    |- 5
        |- 4
        |- 6
            |- 18
                |- 9
                |- 42 

N*ärer Baum
=============================
|- /
    |- bin
    |- urs
    |- etc
    |- var
    |- root
    |- home
        |- usr1
        |- usr2

3 - Sets
Keine Duplikate möglich und keine sotierung
Sammlung einmaltige Werte
---------------------------

                 Hashvalue  |
                --------------------------------------------------------
HashSet                     |            |          |           | 
                     0               1           2           3           

4 - Maps
Key - Value Kombinationen
                                Liste
                                Keys    Einmalige Keys
                                ----
                Hashvalue   |
                --------------------------------------------------------
HashMap         D403        |   2134    |   5982    |   1111    | 
                0               1           2           3        
                
                                Values  Doppelte möglich
                                ------
                3        |      3    |   2    |   1    | 
                ---------------------------------------------
                0               1        2        3      

                                Baum
                                ----
                                D403 -> 2134    |->
                                                |->



5 - Stacks
LIFO - Last in Fist out
    Doppelte Einträge möglich
    Nicht sotierbar
------------------------
7   Point(x,y)  -> weg
3   createPoint
5   MouseDown
2   Init



6 - Queue
---------
FIFO - Fist in Fist out
(Hinten)    7   ->  3   ->  5   ->  2  (Vorne)
                |   7   ->  3   ->  5
                    |   ->  7   ->  3
                    
Priority Queue
---------------
Alles was größer als 5 kommt vor

                        Hinten
1) 2                2   |
2) 5            5   2   |
3) 3        3   5   2   |
4) 7    3   5   2   7   |     
                        Vorne



7 - Nodes
Einzelne Kottenpunkt