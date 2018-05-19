describe('Functions', function(){

  describe('sum', function(){

    it('should be a function', function(){

      expect(typeof sum).toBe('function');

    });

    it('should return a number', function(){

      expect(typeof sum(2 ,3 )).toBe('number');

    });

    it('should sum two numbers', function(){

      expect(sum(2, 3)).toEqual(5);

    });

  });


  describe('sumDigits', function(){

    it('should be a function', function(){

      expect(typeof sumDigits).toBe('function');

    });

    it('should return a number', function(){

      expect(typeof sumDigits(111)).toBe('number');

    });

    it('should sum number digits', function(){

      expect(sumDigits(111)).toEqual(3);

    });

    it('should not sum negative number digits', function(){

      expect(sumDigits(-111)).toEqual(undefined);

    });

  });

  describe('op', function(){

    it('should be a function', function(){

      expect(typeof op).toBe('function');

    });

    it('should return an object', function(){

      expect(typeof op(1,2)).toBe('object');

    });

    it('should operate numbers', function(){

      expect(op(2,2)).toEqual({
        sum: 4,
        sub: 0,
        mul: 4,
        div: 1
      });

      expect(op(2,0)).toEqual({
        sum: 4,
        sub: 0,
        mul: 4,
        div: undefined
      });

    });



  });

});